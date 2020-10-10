class Api::BoatsController < ApplicationController
  skip_before_action :verify_authenticity_token # fixme: remove

  def index
    @boats = Boat.order(:spot_number).where.not(spot_number: nil)
    # Note: Show boats ordered by their spot_numbers (Boat table is indexed by
    # spot_number in DB).
    # And use the index.json.jbuilder view to shape the response to be
    # accessible efficiently.
  end

  def create
    boat = Boat.new(boat_params)

    if boat.save
      render json: boat
    else
      render json: boat.errors.full_messages, status: 422
      # Note: Send useful Model validation errors to the frontend
    end
  end

  def update
    boat = Boat.find(params[:id])

    # Note: Check if there is already a boat at the selected
    another_boat_there = Boat.find_by(spot_number: boat_params[:spot_number])
    if another_boat_there
      # deal with switching spots if there is already another boat at that spot.
      spot_coming_from = boat.spot_number

      if boat.update(spot_number: nil)
        if another_boat_there.update(spot_number: spot_coming_from)
          if boat.update(boat_params)
            render json: [boat, another_boat_there]
          else
            render json: boat.errors.full_messages, status: 422
          end
        else
          render json: another_boat_there.errors.full_messages, status: 422
        end
      end
    else
      # otherwise, can safely place this boat there.
      if boat.update(boat_params)
        render json: boat
      else
        render json: boat.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    boat = Boat.find(params[:id])
    boat.destroy

    render json: boat
  end

  private
    def boat_params
      params.require(:boat).permit(:name, :length, :color, :spot_number)
    end
end
