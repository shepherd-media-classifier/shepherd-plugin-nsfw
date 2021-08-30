import { expect } from 'chai'
import { describe } from 'mocha'
import NsfwFilter from '../src/index'
import fs from 'fs/promises'
import { FilterResult } from 'shepherd-plugin-interfaces'


describe('shepherd-plugin-nsfw tests', ()=>{
	it('loads the model', async()=>{
		await NsfwFilter.init()
		expect(true).true // expect no errors thrown
	}).timeout(0)
	it('uses checkImage', async()=>{
		const pic = await fs.readFile('./test/image.jpeg')
		const res = await NsfwFilter.checkImage(pic,'image/jpeg', 'fake-txid')
		console.log(res)
		expect(res.flagged).false
		expect((res as FilterResult).valid_data).true
	}).timeout(0)
})


