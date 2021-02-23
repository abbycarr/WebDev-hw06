defmodule MultiBull.Game do

  def new do
    %{
      secret: random_num(),
      guesses: MapSet.new(),
      results: MapSet.new(),
    }
  end

  def guess(state, letter) do
    %{
      state | guesses: MapSet.put(state.guesses, letter)
    }
  end

  def result(state, letter) do
    %{
      state | results: MapSet.put(state.results, letter)
    }
  end

  def view(state, name) do
    %{
      guesses: MapSet.to_list(state.guesses),
      results: MapSet.to_list(state.results),
      name: name,
    }
  end

  def random_num() do
    # numbs = Enums.shuffle(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    # Enums.at(numbs, 0) # <> Enums.at(numbs, 1) <> Enums.at(numbs, 2) <> Enums.at(numbs, 3)
  end

  def get_result(letter) do
    letter
  end

end
