def arrange_timestamps(time_arr)
  result = time_arr[0]

  1.upto(time_arr.length -1) do |idx|
    current_file = time_arr[idx]
    current_file.each do |el|
      result.push(el)
      result.heap_sort!
    end
  end
end
