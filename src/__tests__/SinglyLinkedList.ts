import SinglyLinkedList from '@code/SinglyLinkedList'
import { test_list } from '../tests-helpers/ListTest'

test('linked-list', function () {
  const list = new SinglyLinkedList<number>()
  test_list(list)
})
