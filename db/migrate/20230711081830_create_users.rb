class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :firstname
      t.string :lastname
      t.string :email
      t.date :dob

      t.timestamps
    end
  end
end
