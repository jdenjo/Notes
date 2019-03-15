
# x = 1
# arr = []

# while x <100 do
#     if (x%3 == 0 && x%5 ==0)
#         arr.push("fizzbuzz")
#     elsif (x%3 == 0)
#         arr.push("fizz")
#     elsif
#         (x%5 == 0)
#         arr.push("buzz")
#     else
#         arr.push(x)
#     end

#     x +=1
# end

# print arr


# arr = [1,2,3,4,5]

# arr.each do |x|
#     puts x**2
# end


# arr = [[1,7,3],[4,4,6],[7,2,9]]

# arr.flatten!

# arr.each do |x|
#     puts x.to_i * x.to_i
# end


# hash = {"BC"=>["Richmond", "Vancouver"], "Alberta" => ["Calgary", "Edmonton"]}

# hash.each do |key, value|
#     puts "#{key}: #{value.join(',')}"
# end


bc_cities_population = { vancouver: 2135201, victoria: 316327, abbotsford: 149855, kelowna: 141767, nanaimo: 88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }

bc_cities_population.each do |key, value|
     if value > 100000
        puts "#{key} is a large city"
     else
        puts "#{key} is a small city"
     end
    end


