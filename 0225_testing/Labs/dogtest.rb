require "minitest/autorun"
require "./dog.rb"

class Dog_test < MiniTest::Test


def setup
    @bone1 = Bone.new(1)
    @bone2 = Bone.new(2)
    @bone3 = Bone.new(3)
    @bone4 = Bone.new(4)

end


 def test_give

    testDog = Dog.new("Brown","greyhound")

    testDog.give(@bone1);
    testDog.give(@bone2);
    testDog.give(@bone3);

    #test to see there are 3 bones given
   assert_equal(3, testDog.getBonesCount);

   #test to see it does not accept the 4th bone
   testDog.give(@bone4);
   assert_equal(3, testDog.getBonesCount);

end

def test_eat_bone

    testDog = Dog.new("Brown","greyhound")
    testDog.give(@bone3)
    testDog.give(@bone4)
    testDog.give(@bone5)
    testDog.eat
    

    assert_equal(4, testDog.getLastBoneSize);

end

def test_bone_count

    testDog = Dog.new("Brown","greyhound")
    testDog.give(@bone4)
    testDog.give(@bone3)
    testDog.give(@bone3)
    testDog.eat
    
    assert_equal(2, testDog.getBonesCount);


end


end
