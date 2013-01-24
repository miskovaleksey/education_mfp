class AddColumnProviderUidUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string, :limit => 10
    add_column :users, :uid, :integer
  end
end
