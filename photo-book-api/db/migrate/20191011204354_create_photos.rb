class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :imgur_link
      t.string :info

      t.timestamps
    end
  end
end
