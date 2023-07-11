class AddOnDeleteCascadeToRegistered < ActiveRecord::Migration[7.0]
  def change
    remove_reference :registereds, :events
    add_foreign_key :registereds, :events, on_delete: :cascade
    remove_reference :registereds, :profileusers
    add_foreign_key :registereds, :profileusers, on_delete: :cascade
  end
end
