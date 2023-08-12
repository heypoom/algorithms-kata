import LinkedList from '@code/DoublyLinkedList'
import { test_list } from '../tests-helpers/ListTest'

test('DoublyLinkedList', function () {
  const list = new LinkedList<number>()
  test_list(list)
})
