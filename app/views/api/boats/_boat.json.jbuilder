json.set! boat.spot_number do
  json.extract! boat, :id, :name, :length, :color
end
