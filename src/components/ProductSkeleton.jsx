function ProductSkeleton() {

    return (
  
      <div
        className="
        animate-pulse
        bg-white
        rounded-[32px]
        overflow-hidden
        border
        border-gray-100
        shadow-sm
        "
      >
        {/* IMAGE */}
  
        <div
          className="
          h-[340px]
          bg-gray-200
          "
        />
  
        {/* CONTENT */}
  
        <div className="p-6">
  
          {/* CATEGORY */}
  
          <div
            className="
            h-4
            w-24
            bg-gray-200
            rounded-full
            mb-5
            "
          />
  
          {/* TITLE */}
  
          <div
            className="
            h-7
            bg-gray-200
            rounded-xl
            mb-4
            "
          />
  
          <div
            className="
            h-7
            w-3/4
            bg-gray-200
            rounded-xl
            mb-6
            "
          />
  
          {/* RATING */}
  
          <div
            className="
            h-5
            w-28
            bg-gray-200
            rounded-xl
            mb-8
            "
          />
  
          {/* PRICE + BUTTON */}
  
          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <div
              className="
              h-8
              w-24
              bg-gray-200
              rounded-xl
              "
            />
  
            <div
              className="
              h-12
              w-24
              bg-gray-200
              rounded-2xl
              "
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductSkeleton;