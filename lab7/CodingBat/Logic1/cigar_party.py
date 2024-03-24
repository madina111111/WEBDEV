def cigar_party(cigars, is_weekend):
  if 40 <= cigars <= 60:
    return True
  if 40 <= cigars and is_weekend:
    return True
    
  return False
