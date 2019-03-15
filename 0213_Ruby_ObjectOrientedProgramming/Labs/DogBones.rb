class Dog

    def initialize (color, type)
        @color = color
        @type = type
        @bones = []
        @maxBones = 3
    end

    def give (bone)

    unless bone.is_a? Bone
        raise ArgumentError.new("Must be a bone")
    end

        if @bones.length <= @maxBones
                @bones.push(bone)
                puts "got a bone and now have #{@bones.length} bones"
        else 
            puts "I have too many bones"
        end

    end

    def eat
        puts "yummy I ate a size #{@bones[0].boneSize} bone"
        @bones.pop
    end

end

class Bone
    attr_accessor(:boneSize)

    def initialize (boneSize)
        @boneSize = boneSize
    end 

end

fido = Dog.new("Brown","greyhound")
fido.give(Bone.new(5))
fido.give(Bone.new(7))
fido.eat
