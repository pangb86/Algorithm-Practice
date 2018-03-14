# You are playing a simplified Pacman game. You start at the point (0, 0),
# and your destination is (target[0], target[1]). There are several ghosts
# on the map, the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).
#
# Each turn, you and all ghosts simultaneously *may* move in one of 4
# cardinal directions: north, east, west, or south, going from the
# previous point to a new point 1 unit of distance away.
#
# You escape if and only if you can reach the target before any ghost
# reaches you (for any given moves the ghosts may take.)  If you reach
# any square (including the target) at the same time as a ghost, it
# doesn't count as an escape.
#
# Return True if and only if it is possible to escape.

def escape_ghosts(ghosts, target)
    # calculate how many steps the player is from the target
    target_x = target[0]
    target_y = target[1]
    steps = target[0].abs + target[1].abs
    # iterate over each ghost
    ghosts.each do |ghost|
        # calculate how many steps the ghost is from the target
        steps_x = (ghost[0] - target_x).abs
        steps_y = (ghost[1] - target_y).abs
        ghost_steps = steps_x + steps_y
        steps_player = ghost[0].abs + ghost[1].abs
        # if the ghost is closer or the same distance away from the
        # target as the player, return false
        return false if ghost_steps <= steps
    end
    # return true if none of the ghosts can catch the player
    true
end
