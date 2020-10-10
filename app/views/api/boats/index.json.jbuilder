@boats.each do |boat|
  json.partial! 'boat', boat: boat
end
