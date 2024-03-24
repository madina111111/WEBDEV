def caught_speeding(speed, is_birthday):
    if is_birthday:
      if speed <= 65:
        return 0
      if 66 <= speed <= 85:
        return 1
      if speed >= 86:
        return 2
        
    
    if speed <= 60:
        return 0
    if 61 <= speed <= 80:
      return 1
    if speed >= 81:
      return 2
