class AddWalletToProfileuser < ActiveRecord::Migration[7.0]
  def change
    add_column :profileusers, :wallet, :string
  end
end
