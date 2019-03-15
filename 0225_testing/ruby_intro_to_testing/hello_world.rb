require "minitest/autorun"

# To create a grouping of tests with MiniTest,
# create class whose name ends in "Test" and inherits
# from MiniTest::Test.
class HelloWorldTest < MiniTest::Test
  def test_something
    # Use the method `assert` inside a test method to verify
    # that your code must evaluate to something that is
    # truthy.
    assert(true)
  end

  def test_something_else
    # Use the method `assert_equal` inside a test method to compare
    # values.
    assert_equal(2, 1+1)
  end
end