class CreateBoats < ActiveRecord::Migration[5.2]
  def change
    create_table :boats do |t|
      t.text :name, null: false
      t.integer :length, null: false
      t.text :color, null: false
      t.integer :spot_number

      t.timestamps
    end

    add_index :boats, :spot_number
    # Note: No uniqueness DB constraint because Rails philosophy is to put
    # intelligence in Model validations instead.

    # Note: Also, decided against a Model for spots because it is too simple.
  end
end
