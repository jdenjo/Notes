# print "What is your name: \n"
# name = gets.chomp
# puts name.reverse

# print "what is your score? \n"
# score = gets.to_f

# if score > 85 
#     grade = "A"
# elsif
#     score > 75
#     grade = "B"
# elsif
#     score > 50
#     grade = "C"
# else
#     grade = "F"
# end

# puts "your grade is #{grade}"

# x = 1 
# output = ""

# while x <= 50 
#     output += x
#     x += 1
# end

# puts output


# x = 1

# while x <= 50
#     if x%2 > 0
#         puts x
#     end
#     x += 1
# end

# puts  "\n"

# x = 1

# while x <= 50
#     unless x%2 < 1
#         puts x
#     end
#     x += 1
# end


for i in 1..100
    puts i

    if i%3 == 0 && i&5 == 0
        puts "fizzbuzz"
    
    elsif i% 3 == 0
        puts "fizz"
    
    elsif i%5 == 0
        puts "buzz"
    end


end 
