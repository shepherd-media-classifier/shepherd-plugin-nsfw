import { expect } from 'chai'
import { describe } from 'mocha'
import NsfwFilter from '../src/index'
import fs from 'fs/promises'


describe('shepherd-plugin-nsfw tests', ()=>{
	it('loads the model', async()=>{
		await NsfwFilter.init()
		expect(true).true // expect no errors thrown
	}).timeout(0)

	it('uses checkImage', async()=>{
		const pic = await fs.readFile('./test/assets/image.jpeg')
		const res = await NsfwFilter.checkImage(pic,'image/jpeg', 'fake-txid')
		expect(res.flagged).false
		//@ts-ignore
		expect(res.top_score_name).undefined
	}).timeout(0)

	it('uses checkImage for flagged image', async()=>{
		const pic = await fs.readFile('./test/assets/oci0s0Y-u-vIewMCHr1XgMX07if2KkBfKnRZD2sraps.jpg')
		const res = await NsfwFilter.checkImage(pic,'image/jpeg', 'fake-flagged-txid')
		expect(res.flagged).true
		//@ts-ignore
		expect(res.top_score_name).eq('Sexy')
		//@ts-ignore
		expect(res.top_score_value).eq(0.9379738569259644)
	})

	it('try loading nultiple models', async()=>{
		NsfwFilter.init()
		NsfwFilter.init()
		NsfwFilter.init()
		NsfwFilter.init()
		expect(true).true // expect no output in console
	}).timeout(0)	

})


