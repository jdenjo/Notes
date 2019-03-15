
class FizzBuzz

    attr_accessor(:first_number, :second_number)

    def initialize (first_number, second_number)
        @first_number = first_number
        @second_number = second_number
    end

    def run

        for i in 1..100 do
            if i % @first_number == 0 && i % @second_number ==0
                puts 'FizzBuzz'
            elsif i % @first_number == 0
                puts 'Fizz'
            elsif i % @second_number == 0
                puts 'Buzz'
            else
                puts i
            end 
        end

    end



end

fb = FizzBuzz.new(3,5)
fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...