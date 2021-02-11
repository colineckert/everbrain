json.notebook do 
  json.partial! "/api/notebooks/notebook", notebook: @notebook
end

# json.bench do
#   json.partial! '/api/benches/bench', bench: @bench
#   json.reviewIds @bench.reviews.pluck(:id)
# end