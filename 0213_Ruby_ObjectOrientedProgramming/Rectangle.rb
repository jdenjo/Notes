class Rectangle

    attr_accessor :width, :height

    def initialize (width = 0, height = 0)
        @width, @height = width, height
    end

    def area 
        width * height
    end


    def is_square?
        return (@width == @height)
    end

end

rec = Rectangle.new(10,10)
puts rec.area
puts rec.is_square?

rec = Rectangle.new(5,10)
puts rec.area
puts rec.is_square?