require "minitest/autorun"
require "./vector.rb"

class VectorTest < MiniTest::Test
  def test_length
    # GIVEN â Initial state of our program
    # A vector of (3, 4)
    vector = Vector.new(3, 4)

    # WHEN - An action is triggered
    # The length method is called
    length = vector.length

    # THEN - We verify the final state
    # The length should equal 5

    # Whe using `assert_equal`, the argument order is as follows:
    # - The first argument is the value we expect or want.
    # - The second argument is the actual value our code returned.
    assert_equal(5, length)
    assert_equal(13, Vector.new(5, 12).length)
    assert_equal(17, Vector.new(8, 15).length)
    assert_equal(20, Vector.new(0, 20).length)
    assert_equal(35, Vector.new(35, 0).length)
  end

  def test_to_s

    assert_equal("Vector (5, 5)", Vector.new(5, 5).to_s)
  
  end



end