class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :photo
      t.string :commenter
      t.text :content
      

      t.timestamps
    end
  end
end
