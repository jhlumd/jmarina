json.set! "spot#{boat.spot_number}" do
  json.extract! boat, :name, :length, :color
end
