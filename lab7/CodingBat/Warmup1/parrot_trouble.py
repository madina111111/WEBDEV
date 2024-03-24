def parrot_trouble(talking, hour):
  if (hour < 7 or hour > 20) and talking:
    return True
  return False
