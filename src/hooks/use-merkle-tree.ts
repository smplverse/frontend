import { MerkleTree } from 'merkletreejs'

import keccak256 from 'keccak256'
import { WHITELISTED_ADDRESSES } from '../constants'

const createTree = () => {
  const tree = new MerkleTree(WHITELISTED_ADDRESSES, keccak256, {
    hashLeaves: true,
    sortPairs: true,
  })
  return tree
}

export const useMerkleTree = () => {
  const tree = createTree()
  return tree
}
