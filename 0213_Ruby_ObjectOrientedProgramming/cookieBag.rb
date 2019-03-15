#  Creating a class

# Use the keyword class to create a class.
# We name classes following PascalCase style.
class Cookie

    def initialize(sugar, flour)
      @sugar = sugar
      @flour = flour
    end
  
    attr_accessor(:sugar, :flour)
  
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


  class CookieBag 

    def initialize
        @cookieBag = []

    end

    def addCookie cookie
        @cookieBag.push(cookie)
        puts "added Cookie"
    end

    def removeCookie 
        @cookieBag.pop
        puts "removed Cookie"
    end

    def cookieCount
        puts "#{@cookieBag.length} cookies in the cookie bag"
    end

  end

  c = CookieBag.new
  c.cookieCount
  c.addCookie(Cookie.new(1,1))
  c.cookieCount
  c.removeCookie
  c.cookieCount
  
