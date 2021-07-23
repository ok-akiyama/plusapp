class CreateAdditions < ActiveRecord::Migration[6.0]
  def change
    create_table :additions do |t|

      t.integer :number_id,  null: false
      t.integer :image_id,   null: false
      t.timestamps
    end
  end
end
