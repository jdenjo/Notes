# def by_five?(num)
#     num % 5 == 0
# end

# puts by_five?(5)
# puts by_five? 6

# def whatIsIt(thing)

#     if [String, Array, Integer].include?(thing.class)
#         thing.class.to_s
#     else
#         "Something Else"
#     end
# end

# puts whatIsIt("Test")
# puts whatIsIt(1)
# puts whatIsIt(1.5)

# def multiply(a, b= 1)
#     a * b 
# end

# puts multiply(5)

# def min_num(*nums)

#     nums.reduce() do |smallest, current|
#         if smallest < current
#             smallest
#         else
#             current
#         end
#     end
# end

# puts min_num(1,2,3,4,5)


def each(arr)
    new_array = []
    for val in arr
      new_array.push(yield(val))
    end
    return new_array
end
  
print  each([1,2,3,4,5]) {|num| num * num }