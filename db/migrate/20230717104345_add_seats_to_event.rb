class AddSeatsToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :seat, :string
  end
end
