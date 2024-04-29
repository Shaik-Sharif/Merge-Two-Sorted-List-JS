class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
  
    let mergedHead = new ListNode();
    let current = mergedHead;
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2;
    return mergedHead.next;
  }
  
  // Example usage:
  const list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);
  
  const list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);
  
  const mergedList = mergeTwoLists(list1, list2);
  
  // Print the merged list values
  let current = mergedList;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result); // Output: [1, 1, 2, 3, 4, 4]
  