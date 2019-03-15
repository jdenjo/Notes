#  Creating a class

# Use the keyword class to create a class.
# We name classes following PascalCase style.
class Cookie

    # Declare class variables by prefixing a word with '@@'.
    #  A class variable is accessible by all class and instance
    # methods. It is shared across all instances, so changing it
    # in one instance will change it for all other instances.
    @@color = "Brown"
  
    # The initialize method is a special method
    # that is called when a class is instantiated.
    def initialize(sugar, flour)
      puts "in the initialize method."
      # Create an instance variable by prefixing
      # the name of the variable with the '@' symbol
  
      # An instance variable is scoped to the body of
      # the class and an instance. It useable bu all
      # instance methods including private methods of
      # the class.
      # Every instance of a class, gets its own set of
      # instance variables.
      @sugar = sugar
      @flour = flour
    end
  
    # This is a getter method
    # It reads the value of an instance variable.
    # def sugar
    #   @sugar
    # end
    # The following method will create the method above
    # to read the @sugar instance variable
    attr_reader :sugar, :flour
  
    # This is a setter method
    # It sets the value of an instance variable
    # i.e. c.sugar = 10
    # def sugar=(qty)
    #   @sugar = qty
    # end
    # The following method will create the method above
    # to create a setter for the @sugar instance variable
    attr_writer(:sugar, :flour)
  
    # To create a getter and setter, all at once, for an
    # instance variable. Use:
    # attr_accessor(:sugar, :flour)
  
    # Define instance methods for a class by
    # writing the method within the class body.
    def eat
      bake
      "Nom, nom nom."
    end
  
    # To create a class method, prefix the method name
    # with 'self.'. A class method can only be called
    # on the class and not instances of the class.
    def self.info
      puts "I'm in the Cookie class!"
    end
  
    #  Any method delcared after the keyword 'private'
    # in a class, becomes a private method.
    # Private methods can only be used in the body of
    # a class. They can't be called as instance methods
    # of the class' instance.
    private
  
    def bake
      puts "baking the cookie"
    end
  end
  
  c = Cookie.new
  c.eat
  c.bake # this will give an error private method `bake'
  # called for #<Cookie:0x00007fb962954610>
  # (NoMethodError)
  # info is a class method 'def self.info'
  Cookie.info # => "I'm in the Cookie class!"
  c.info # => undefined method error.
  
  # Once we have defined a getter
  c.sugar # => returns @sugar for a given instance
  c.flour # => returns @flour for a given instance
  
  # 'hello'.eat
  # will throw an error because these methods
  # have only been defined on the Cookie class.
  
  # Global variables
  
  # Prefix any word with $ to create a global variable.
  # 98% of the time don't use global variables. Variables
  # should always use the minimum scope that is needed.
  $domain = "http://raise.hell"
  