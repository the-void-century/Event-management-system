class CreateRegistereds < ActiveRecord::Migration[7.0]
  def change
    create_table :registereds do |t|
      t.references :profileuser, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
