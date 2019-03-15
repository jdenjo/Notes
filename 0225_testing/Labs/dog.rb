class Dog
    attr_accessor(:bones)

    def initialize (color, type)
        @color = color
        @type = type
        @bones = []
        @maxBones = 3
    end

    def give (bone)

        if @bones.length < @maxBones
                @bones.push(bone)
                puts "got a bone and now have #{@bones.length} bones"
        else 
            puts "I have too many bones"
        end

    end

    def eat
        puts "yummy I ate a bone"
        @bones.pop
    end

    def getBonesCount
        @bones.length
    end


    def getLastBoneSize
        puts @bones.length
        puts @bones.last.boneSize
        return @bones.last.boneSize
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
fido.give(Bone.new(6))
fido.give(Bone.new(7))
fido.eat
fido.getLastBoneSize


