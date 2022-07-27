import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'

import { ALLOWLISTED_ADDRESSES } from '../constants-sybil'

const createTree = () => {
  const tree = new MerkleTree(ALLOWLISTED_ADDRESSES, keccak256, {
    hashLeaves: true,
    sortPairs: true,
  })
  return tree
}

export const useMerkleTreeSybil = () => {
  const tree = createTree()
  return tree
}
