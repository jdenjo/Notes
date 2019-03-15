# Lab 1

# arr = 'a'.upto('z').to_a

# i = 0

# while (i < arr.length)
#     puts arr[i] * (i +1)
#     i += 1
# end

# Lab 2

# correctCounter = 0;
# questions = 0;

# puts "How many sides does a hexagon have? \n 1.-five \n 2.-six \n 3.seven"
# answer = gets.to_i
# questions += 1
# if answer == 1
#     correctCounter += 1;
# end

# puts "How many wheels in a bicycle? \n 1.-one \n 2.-two \n 3.three"
# answer = gets.to_i
# questions += 1
# if answer == 2
#     correctCounter += 1;
# end

# puts "How many students in your cohort? \n 1.-six \n 2.-seven \n 3.eight"
# answer = gets.to_i
# questions += 1
# if answer == 3
#     correctCounter += 1;
# end

# percentage = (correctCounter.to_f/questions.to_f * 100).round(2)

# puts "you answered #{correctCounter} of #{questions} correct which is a #{percentage}% score"

# LAB 3 permutations

# puts "give me three letters seperated by commas"
# input = gets.chomp
# arr = input.split(",");
# permutations = arr.repeated_permutation(3)

# for item in permutations
#     puts item.to_s

# end

# # LAB 4

puts "Enter a number"
input = gets.to_i

answer = input
count = 1

x = 1

while x > 0   
    if answer%input == 0
        puts answer
        count += 1
    end

    if count > input
        break
    end

    answer += 1

end

