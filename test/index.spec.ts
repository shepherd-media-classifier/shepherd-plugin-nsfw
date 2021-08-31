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
		const pic = await fs.readFile('./test/image.jpeg')
		const res = await NsfwFilter.checkImage(pic,'image/jpeg', 'fake-txid')
		expect(res.flagged).false
	}).timeout(0)

	it('try loading nultiple models', async()=>{
		NsfwFilter.init()
		NsfwFilter.init()
		NsfwFilter.init()
		NsfwFilter.init()
		expect(true).true // expect no output in console
	}).timeout(0)	

})


