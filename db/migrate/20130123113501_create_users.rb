class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null:false, limit: 64
      t.string :phone, limit: 32
      t.string :email, null:false
      t.string :password

      t.timestamps
    end
  end
end
