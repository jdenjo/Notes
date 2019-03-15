require('./Animal.rb')
require('./HelperMethods')

class Cat < Animals

    include HelperMethods

    def initialize (name)
        @birds = []
        @name  = name
    end

    def catch(bird)
        unless bird.is_a? Bird
            raise ArgumentError.new("Must be a Bird")
        end

        outcome = random_number

        if outcome <= 50 
            puts "caught the bird"
            @birds.push(bird)
        else
            puts "bird got away"
        end

    end

end


class Bird
    def initialize(name)
        @name = name
    end
end


for i in 1..100 do
    puts "simulation #{i} cat#{i} vs bird#{i}:" 
    Cat.new("Cat"+i.to_s).catch(Bird.new("Bird"+i.to_s))
end

