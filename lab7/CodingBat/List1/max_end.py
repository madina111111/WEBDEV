def max_end3(nums):
  if nums[0] > nums[-1]:
    mx = nums[0]
  else:
    mx = nums[-1]
  
  
  arr = []
  for i in range(len(nums)):
    arr.append(mx)
    
  return arr
