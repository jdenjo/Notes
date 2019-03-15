class Rectangle
    def initialize(width, height)
      @width = width
      @height = height
    end
  
    def area
      @width * @height
    end

    def perimeter
        2 * (@width + @height)
    end
  

  end