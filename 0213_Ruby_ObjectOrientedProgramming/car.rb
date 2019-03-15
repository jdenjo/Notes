
class Car

    def initialize(model, type = "sedan", capacity = 4)
        @model = model
        @type = type
        @capacity = capacity
    end
    
    def drive
        puts "Driving down the road"
    end

    def stop
        puts "Stopping Car"
    end

    def park
        puts "Parking car"
        gasUp
    end

    def self.max_speed
        200
    end


    private

    def gasUp
        puts "Gassing up"

    end
   

end

ferrari = Car.new("Ferrari", "sports", "4")
ferrari.drive
ferrari.stop
ferrari.park

puts ferrari.type
puts Car.max_speed



