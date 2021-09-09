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

})