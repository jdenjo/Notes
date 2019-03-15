require "minitest/autorun"
require "./rectangle.rb"

class RectangleTest < MiniTest::Test
  def test_area
    assert_equal(16, Rectangle.new(4, 4).area)
    assert_equal(30, Rectangle.new(3, 10).area)
    assert_equal(0, Rectangle.new(0, 5).area)
  end

  def test_perimeter
    assert_equal(20, Rectangle.new(5, 5).perimeter)
    assert_equal(16, Rectangle.new(3, 5).perimeter)
  end

  # def test_area_when_width_is_negative
  # end
end
