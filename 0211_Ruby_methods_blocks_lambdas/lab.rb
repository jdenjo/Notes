# def get_user_info() 

#     info = {}

#     puts "what is your first name?"
#     info[:first_name] = gets.chomp
#     puts "what is your last name?"
#     info[:last_name] = gets.chomp
#     puts "puts what is your city of birth?"
#     info[:city_of_birth] = gets.chomp 
    
#     print info
# end

# get_user_info

# ********LAB 2
# def most_common_letter(phrase)

#     arr = phrase.delete(' ').split('')
#     counts = {}

#     for letter in arr do
#         if counts[": #{letter}" ]
#             counts[": #{letter}" ] = counts[": #{letter}" ] + 1
#         else
#         counts[": #{letter}" ]    = 1
#         end
#     end

#     highest = 0.to_i
#     result = ""

#     counts.map{ |key, value| 
#         if value > highest.to_i
#             highest = value
#             result = key
#         end
#     }

#     puts result
# end

# most_common_letter("aaaabbc") # => "a"
# most_common_letter("T a d c g d g d d n") # => "d"
# most_common_letter("1111 monkeys on the wall") # => "1"


# *** Lab 3

# def pluck(arr, find)

#     results = []

#     for item in arr do 
#         item.map { |key, value|
#             if key == find
#                results.push(value)
#             else
#                 results.push(nil) 
#             end
#         }
#     end

#     print results

# end

# pluck([{a:1}, {a:2}], :a)  ## returns [1,2]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]

# *** Lab 4 

# def reduce (arr, init)

# result = init || arr[0]

#     for item in arr do       
#         result = yield(result, item)
#     end

#     puts result
#     return result

# end

# reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21
# reduce(["This", "is", "my", "sentence"], "") { |sentence, word| sentence + " " + word } # => "This is my sentence"
# reduce([6, 5, 9, 2, 1, 10, 3], Float::INFINITY) do |min, v|
#     if min > v
#       v
#     else
#       min
#     end
#   end

  # *** Lab 5


def map_over_hash(hash)
    hash.map { |key, value|
        yield(key, value)
    }
end

# puts(map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
#     "Her #{key.to_s} is #{value}"
#   end)

puts(map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value })
# => [ "22222", "1010", "555555" ]

