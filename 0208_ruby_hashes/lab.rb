# Lab 1 Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:

# puts "add letters"
# input = gets.chomp
# arr = input.split("")

# result = []
# i = 0

# loop do
#     if i < (arr.size - 1)
#         result.push(arr[i] + arr[i +1])
#     end
#     i += 1
#     if i == arr.size
#         break
#     end
# end

# print result


# Lab 2 Next Module 
# Write some code that keeps asking the user for book names until the user enters "exit". 
# After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.

# books = []
# answer = ""

# loop do 
#     puts "add book name"
#     answer = gets.chomp
#     if(answer == "exit")
#         print books.sort
#         break
#     else
#         books.push(answer.to_s.capitalize)
#     end
# end


# ********Lab 3 
# Given an array of arrays:
# 1 | array = [[2,3,4], [5,6,7], [6,7,8]]
# Write a piece of code that will take that array and give back an array of arrays with each element 
# multiplied by itself so you will get back:1 | [[4, 9, 16], [25, 36, 49], [36, 49, 64]]


# array = [[2,3,4], [5,6,7], [6,7,8]]

# array.map do |i|
#     i.map! do |val|
#         val * val
#     end    
# end

# print array


# ******Lab 4 
# Next Module
# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:
# 1 | greeting = "hello"
# 2 | puts greeting.reverse # olleh
# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.

# greeting = "hello"
# x = greeting.size
# backwards = ""

# while x >= 0
#     backwards += greeting[x].to_s
#     x -= 1
# end

# print backwards

# Lab 5
# Next Module
# Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a hash. 
# After that loop through the hash and display the results, for example:
# Your first name is Tam.
# Capitalize the inputs from the user if they are capitalizable.

# info = Hash.new(0)

# puts "What is your first name?"
# info[:first_name] = gets.chomp

# puts "What is your last name?"
# info[:last_name] = gets.chomp

# puts "City of birth?"
# info[:birth_city] = gets.chomp

# puts "age?"
# info[:age] = gets.chomp

# info.each do |key, value|
#     puts "Your #{key} is #{value}."
# end

# Lab 6

numbers = []

for i in 1..100 do
    numbers.push(i)
end

numbers.push(Random.rand(0...100))
numbers.sort!

# check for the duplicate

results = Hash.new
duplicate = 0;

for i in numbers do
    if results.has_value?(i)
        duplicate = i;
        break
    else
    results[:number] = i
    end
end

print numbers
puts "your duplicate is #{duplicate}"

