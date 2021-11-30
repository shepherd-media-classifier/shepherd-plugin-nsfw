import { expect } from 'chai'
import { describe } from 'mocha'
import NsfwFilter from '../src/index'
import fs from 'fs/promises'
import { FilterErrorResult } from 'shepherd-plugin-interfaces'

describe('NsfwTools tests', ()=>{
	before('loads the model', async function(){
		this.timeout(0)
		await NsfwFilter.init()
	})

	it('oversized png', async()=>{
		const pic = await fs.readFile('./test/0Hycn44ITAICfn0YbQP1eg3IMueuf5LVKpUAbYiAJYs.png')
		const res = await NsfwFilter.checkImage(pic,'image/png', '0Hycn44ITAICfn0YbQP1eg3IMueuf5LVKpUAbYiAJYs')
		expect(res.flagged).undefined
		const resErr = res as FilterErrorResult
		expect(resErr.data_reason).eq('oversized')
	}).timeout(0)

	// it('EBT4_FQ7X28HdiHlxG4uVrbUI7Gvvo_LV0chfXyZQa8', async () => {
	// 	const pic = await fs.readFile('./test/EBT4_FQ7X28HdiHlxG4uVrbUI7Gvvo_LV0chfXyZQa8.gif')
	// 	const res = await NsfwFilter.checkImage(pic, 'image/gif', 'EBT4_FQ7X28HdiHlxG4uVrbUI7Gvvo_LV0chfXyZQa8 ')
	// 	console.log(res)
	// 	expect(res.flagged).false
	// }).timeout(0)

	it('8HcUVJMAdb3HG9XWBLdwpFbCEtc-PmQmrJM-WvPfUcQ', async () => {
		const pic = await fs.readFile('./test/8HcUVJMAdb3HG9XWBLdwpFbCEtc-PmQmrJM-WvPfUcQ.png')
		const res = await NsfwFilter.checkImage(pic, 'image/png', '8HcUVJMAdb3HG9XWBLdwpFbCEtc-PmQmrJM-WvPfUcQ')
		console.log(res)

		if(res.flagged !== undefined){
			console.log('On big dev machine you should have seen "Allocation of XXXXX exceeds 10% of free system memory" errors and system hanging')
			expect(res.flagged).false
		}else{
			console.log('test system, ran out of memory')
			expect((<FilterErrorResult>res).data_reason).eq('oversized')
		}
	}).timeout(0)

})