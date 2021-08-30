import { expect } from 'chai'
import { describe } from 'mocha'
import NsfwFilterBuild from '../build'
import fs from 'fs/promises'
import { FilterResult } from 'shepherd-plugin-interfaces'


describe('shepherd-plugin-nsfw from build tests', ()=>{
	it('loads the model', async()=>{
		await NsfwFilterBuild.init()
		expect(true).true // expect no errors thrown
	}).timeout(0)
	it('uses checkImage', async()=>{
		const pic = await fs.readFile('./test/image.jpeg')
		const res = await NsfwFilterBuild.checkImage(pic,'image/jpeg', 'fake-txid')
		console.log(res)
		expect(res.flagged).false
		expect((res as FilterResult).valid_data).true
	}).timeout(0)
})


